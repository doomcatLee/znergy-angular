import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-url',
  templateUrl: './generate-url.component.html',
  styleUrls: ['./generate-url.component.css']
})
export class GenerateUrlComponent implements OnInit {

  baseUrl = 'https://jxfmonfrfa.execute-api.us-west-2.amazonaws.com/prod/'
  createTableUrl = 'create-table?';

  createRecordUrl = 'create-item-ddb?';
  readRecordUrl = 'read-single-record-ddb?';
  deleteRecordUrl = 'delete-single-record-ddb'

  constructor() { }

  ngOnInit() {
  }

  submitForm(tableName: String, partitionKey: String, sortKey: String) {
    this.createTable(tableName, partitionKey, sortKey);
    this.generateURLs(tableName, partitionKey, sortKey);
  }

  createTable(tableName: String, partitionKey: String, sortKey: String) {
    // TODO: Will need to perform API call to create table in DynamoDB

    // Create Table
    const outputUrlCreateTable = this.baseUrl + this.createTableUrl + 'tableName=' + tableName + '&' + 'hashKey=' + partitionKey + '&' + 'rangeKey=' + sortKey;

    console.log('Create Table:\n' + outputUrlCreateTable);
    console.log('\n');
  }

  generateURLs(tableName: String, partitionKey: String, sortKey: String){
    // Items in brackets [] to be replaced by actual String/Number values

    // Create Single Record
    const outputUrlCreateRecord = this.baseUrl + this.createRecordUrl + 'tableName=' + tableName + '&' + 'hashKey=' + partitionKey + '&' + 'rangeKey=' + sortKey + '&' + 'hashValue=' + '[hashValue]' + '&' + 'rangeValue=' + '[rangeValue]';

    // Read Single Record
    const outputUrlReadRecord = this.baseUrl + this.readRecordUrl + 'tableName=' + tableName + + '&' + 'hashKey=' + partitionKey + '&' + 'rangeKey=' + sortKey + '&' + 'rangeValue=' + '[rangeValue]' + '&' + 'hashValue=' + '[hashValue]';

    // Delete Single Record
    const outputUrlDeleteRecord = this.baseUrl + this.deleteRecordUrl + 'tableName=' + tableName + '&' + 'hashKey=' + partitionKey + '&' + 'hashValue=' + '[hashValue]' + 'rangeKey=' + sortKey + '&' + 'rangeValue=' + '[rangeValue]';

    console.log('Create Single Record:\n' + outputUrlCreateRecord);
    console.log('Read Single Record:\n' + outputUrlReadRecord);
    console.log('Delete Single Record:\n' + outputUrlDeleteRecord);
  }

}
