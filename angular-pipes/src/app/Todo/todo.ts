export class Todo {
  constructor(
    public userId: number = 1,
    public id: number = 1,
    public title: string = `delectus aut autem`,
    public completed: boolean = false
) { }
}