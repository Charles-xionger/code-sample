class LinkList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    getElementAt(position) { } // 返回索引对应的元素

    append(element) { } // 添加节点

    insert(position, element) { } // 指定位置添加节点

    removeAt(position) { } // 删除指定位置元素

    indexOf(element) { } // 查找给定元素索引

    // ...
}

// 具体实现
function getElementAt(position) {
    if (position < 0 || position >= this.length) {
        let current = this.head;
        for (let i = 0; i < position; i++) {
            current = current.next
        }
        return current
    }
}

// 组装标准链表的辅助类
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

function append() {
    // 生成复杂元素node
    let node = new node(element);

    // 链表为空
    if (this.head = null) {
        this.head = node;
    } else {
        // 找到尾巴
        let current = this.getElementAt(this.length - 1);

        current.next = node;
    }
    this.length++;
}