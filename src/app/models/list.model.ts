import ListItem from './listItem.model';

export default class List {

  constructor(
    public name: string,
    public listItems: ListItem[]
  ) {  }

}
