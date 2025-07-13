// v = value, c = children

const tree = [
    {
        v: 5,
        c: [
            {
                v: 10,
                c: [
                    {
                        v: 11,

                    }
                ]
            },
            {
                v: 7,
                c: [
                    {
                        v: 5,
                        c: [
                            {
                                v: 1,
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v: 10,
            },
            {
                v: 15,
            }
        ]
    }
]

const recursion = (tree) => {
    let sum = 0;
    tree.forEach(node => {
        sum += node.v

        if (!node.c) {
            return node.v
        }

        sum += recursion(node.c)
    })

    return sum;
}

console.log(recursion(tree))   // 69