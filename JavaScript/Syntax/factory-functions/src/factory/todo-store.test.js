describe("TodoStore tests", function() {
    "use strict";
    let todoDataServiceMock;
    let userStoreMock;
    beforeEach(function() {
        todoDataServiceMock = {
            get : jasmine.createSpy().and.returnValue(Promise.resolve()),
            add : function(todo){ return Promise.resolve(todo); }
        };
        userStoreMock = {
            findById: jasmine.createSpy().and.returnValue({ name: "User"})
        };
    });

    it("Can fetch", function() {
        //Arrange
        let todoStore = TodoStore(todoDataServiceMock, {});

        //Act
        todoStore.fetch();
        //Assert
        expect(todoDataServiceMock.get).toHaveBeenCalled();
    });
    it("Can add", function() {
        //Arrange
        let todoStore = TodoStore(todoDataServiceMock, userStoreMock);

        //Act
        let todo = { id: 1, title: "Do task"};
        todoStore.add(todo).then(function assert(){
            //Assert
            let todos = todoStore.getTodos();
            expect(todos.length).toBe(1);
            expect(todos[0].id).toBe(1);
        });
    });
    it("Maps users", function() {
        //Arrange
        let todoStore = TodoStore(todoDataServiceMock, userStoreMock);

        //Act
        let todo = { id: 1, title: "Do task", userId: 1};
        todoStore.add(todo).then(function assert(){
            //Assert
            let todos = todoStore.getTodos();
            expect(userStoreMock.findById).toHaveBeenCalledWith(1);
            expect(todos.length).toBe(1);
            expect(todos[0].userName).toBe("User");
        });
    });
});