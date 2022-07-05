class Node 
{
    constructor(val)
    {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList 
{
    constructor ()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    Doubly_List_Push(val)
    {
        let node = new Node(val);
        if(!this.head)
        {
            this.head = node;
            this.tail = node;
        }
        else
        {
            let temp = this.tail;
            this.tail = node;
            node.prev = temp;
            temp.next = node;
        }
        this.length++;
        return this;
    }

    Doubly_List_Pop ()
    {
        if(!this.head)
        {
            return undefined;
        }
        let temp = this.tail;
        if(this.length === 1)
        {
            this.head = null;
            this.tail = null;
        }
        else
        {
            this.tail = temp.prev;
            this.tail.next = null;
            this.prev = null;
        }
        this.length --;
        return this;
    }

    Doubly_List_Add_At_Start(val)
    {
        let node = new Node(val);
        if(!this.head)
        {
            this.head = node;
            this.tail = node;
        }
        else
        {
            let temp = this.head;
            this.head = node;
            node.next = temp;
            temp.prev= node;
        }
        this.length++;
        return this
    }
}

let DLL = new DoublyLinkedList;

DLL.Doubly_List_Push(10);
DLL.Doubly_List_Push(20);
DLL.Doubly_List_Push(30);
DLL.Doubly_List_Pop();
DLL.Doubly_List_Add_At_Start(100);

console.log(DLL);