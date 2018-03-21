from chalice import Chalice
from chalice import NotFoundError
import boto3
from boto3.dynamodb.conditions import Key, Attr
import decimal
import json

app = Chalice(app_name='ssk_coffee_api')

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('USER_INFO')

@app.route('/user/{id}', methods=['GET', 'PUT'], cors=True)
def user_data(id: str):
    try:
        request = app.current_request
        if request.method == 'GET':
            if id == 'all':
                get_response = table.scan()
                return get_response['Items']
            else:
                get_response = table.get_item( Key={ 'id': id } )
                return get_response['Item']
        elif request.method == 'PUT':
            update_response = table.update_item(
                Key={ 'id': id},
                UpdateExpression='SET today = today + :val, thisMonth = thisMonth + :val',
                ExpressionAttributeValues={ ':val': decimal.Decimal(1) },
                ReturnValues='UPDATED_NEW'
            )
            return update_response['Attributes']
    except KeyError:
        raise NotFoundError(id)
