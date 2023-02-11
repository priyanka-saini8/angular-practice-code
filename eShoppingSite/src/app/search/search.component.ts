import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  searchValue: string = "";

  changeSearchValue(inputData: Event){
    // console.log((<HTMLInputElement>inputData.target).value);
    this.searchValue = (<HTMLInputElement>inputData.target).value;
  }
}
