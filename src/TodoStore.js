import {observable} from "mobx";

class TodoStore {
    @observable todos = ["buy milk", "buy eggs"];
    @observable filter = "";

}
var store = new TodoStore;
export default store;
