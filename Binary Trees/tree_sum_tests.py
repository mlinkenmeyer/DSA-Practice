from tree_sum import Node, tree_sum

# Define your test case function
def test_tree_sum_1():
    a = Node(3)
    b = Node(11)
    c = Node(4)
    d = Node(4)
    e = Node(-2)
    f = Node(1)

    a.left = b
    a.right = c
    b.left = d
    b.right = e
    c.right = f

    #       3
    #    /    \
    #   11     4
    #  / \      \
    # 4   -2     1

    expected_result = 21
    result = tree_sum(a)

    # Check if result matches expected result
    if result == expected_result:
        print("Test 1 passed!")
    else:
        print("Test 1 failed!")

# Call your test case function
test_tree_sum_1()

# Define your test case function
def test_tree_sum_2():
    a = Node(1)
    b = Node(6)
    c = Node(0)
    d = Node(3)
    e = Node(-6)
    f = Node(2)
    g = Node(2)
    h = Node(2)

    a.left = b
    a.right = c
    b.left = d
    b.right = e
    c.right = f
    e.left = g
    f.right = h

    #      1
    #    /   \
    #   6     0
    #  / \     \
    # 3   -6    2
    #    /       \
    #   2         2

    expected_result = 10
    result = tree_sum(a)

    # Check if result matches expected result
    if result == expected_result:
        print("Test 2 passed!")
    else:
        print("Test 2 failed!")

# Call your test case function
test_tree_sum_2()

# Define your test case function
def test_tree_sum_3():
    expected_result = 0
    result = tree_sum(None)

    # Check if result matches expected result
    if result == expected_result:
        print("Test 3 passed!")
    else:
        print("Test 3 failed!")

# Call your test case function
test_tree_sum_3()
