import { Component, OnInit } from '@angular/core';
// import {MdGridListModule} from '@angular/material';

export class Link {
  text: string;
}

@Component({
  selector: 'app-generate-url',
  templateUrl: './generate-url.component.html',
  styleUrls: ['./generate-url.component.css']
})

export class GenerateUrlComponent implements OnInit {
  links: Link[] = [];

  constructor() { }

  ngOnInit() {
  }

  submitForm(tableName: String, partitionKey: String, sortKey: String) {
    const baseUrl = 'https://jxfmonfrfa.execute-api.us-west-2.amazonaws.com/prod/';
    const tableIdentifier = 'tableName=' + tableName;
    const hashKeyIdentifier = 'hashKey=' + partitionKey;
    const rangeKeyIdentifier = 'rangeKey=' + sortKey;

    this.createTable(baseUrl, tableIdentifier, hashKeyIdentifier, rangeKeyIdentifier);
    this.generateURLs(baseUrl, tableIdentifier, hashKeyIdentifier, rangeKeyIdentifier);
  }

  createTable(baseUrl: String, tableIdentifier: String, hashKeyIdentifier: String, rangeKeyIdentifier: String) {
    const createTableResource = 'create-table-ddb?'

    // Create Table
    const createTableUrl = baseUrl + createTableResource + tableIdentifier + '&' + hashKeyIdentifier + '&' + rangeKeyIdentifier;

    console.log('Create Table:\n' + createTableUrl);
    console.log('\n');

    // TODO: Will need to perform API call to create table in DynamoDB
  }

  generateURLs(baseUrl: String, tableIdentifier: String, hashKeyIdentifier: String, rangeKeyIdentifier: String){
    const createRecordResource = 'create-record-ddb?';
    const readRecordResource = 'read-single-record-ddb?';
    const readAllRecordsResource = 'read-all-records-ddb?';
    const updateRecordResource = 'update-record-ddb?';
    const deleteRecordResource = 'delete-record-ddb?';

    // Create Single Record
    let createRecordUrl: String = baseUrl + createRecordResource + tableIdentifier + '&' + hashKeyIdentifier + '&' + rangeKeyIdentifier + '&' + 'hashValue=' + '[hashValue]' + '&' + 'rangeValue=' + '[rangeValue]';

    // Read Single Record
    let readSingleRecordUrl: String = baseUrl + readRecordResource + tableIdentifier + '&' + hashKeyIdentifier + '&' + rangeKeyIdentifier + '&' + 'hashValue=' + '[hashValue]' + 'rangeValue=' + '[rangeValue]';

    // Read All Records
    let readAllRecordsUrl: String = baseUrl + readAllRecordsResource + tableIdentifier;

    // Update Single Record
    let updateRecordUrl: String = baseUrl + updateRecordResource + tableIdentifier + '&' + hashKeyIdentifier + '&' + rangeKeyIdentifier + '&' + 'hashValue=' + '[hashValue]' + 'rangeValue=' + '[rangeValue]';

    // Delete Single Record
    let deleteRecordUrl: String = baseUrl + deleteRecordResource + tableIdentifier + '&' + hashKeyIdentifier + '&' + rangeKeyIdentifier + '&' + 'hashValue=' + '[hashValue]' + '&' + 'rangeValue=' + '[rangeValue]';

    console.log('Create Single Record:\n' + createRecordUrl);
    console.log('Read Single Record:\n' + readSingleRecordUrl);
    console.log('Read All Records:\n' + readAllRecordsUrl);
    console.log('Update Single Record:\n' + updateRecordUrl);
    console.log('Delete Single Record:\n' + deleteRecordUrl);
    console.log('');

    let createRecordUrlLink: Link = JSON.parse(JSON.stringify({name: 'Create Record', text: createRecordUrl}));
    let readSingleRecordUrlLink: Link = JSON.parse(JSON.stringify({name: 'Read Record', text: readSingleRecordUrl}));
    let readAllRecordsUrlLink: Link = JSON.parse(JSON.stringify({name: 'Read All Records', text: readAllRecordsUrl}));
    let updateRecordUrlLink: Link = JSON.parse(JSON.stringify({name: 'Update Record', text: updateRecordUrl}));
    let deleteRecordUrlLink: Link = JSON.parse(JSON.stringify({name: 'Delete Record', text: deleteRecordUrl}));

    this.links.push(createRecordUrlLink);
    this.links.push(readSingleRecordUrlLink);
    this.links.push(readAllRecordsUrlLink);
    this.links.push(updateRecordUrlLink);
    this.links.push(deleteRecordUrlLink);

    console.log(this.links);
  }

}
