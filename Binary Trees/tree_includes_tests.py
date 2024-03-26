from tree_includes import Node, tree_includes

def test_tree_includes_1():
    a = Node("a")
    b = Node("b")
    c = Node("c")
    d = Node("d")
    e = Node("e")
    f = Node("f")

    a.left = b
    a.right = c
    b.left = d
    b.right = e
    c.right = f

    #      a
    #    /   \
    #   b     c
    #  / \     \
    # d   e     f

    expected_result = True
    result = tree_includes(a, "e")

    # Check if result matches expected result
    if result == expected_result:
        print("Test 1 passed!")
    else:
        print("Test 1 failed!")

# Call your test case function
test_tree_includes_1()

# Test 2
def test_tree_includes_2():
    a = Node("a")
    b = Node("b")
    c = Node("c")
    d = Node("d")
    e = Node("e")
    f = Node("f")

    a.left = b
    a.right = c
    b.left = d
    b.right = e
    c.right = f

    #      a
    #    /   \
    #   b     c
    #  / \     \
    # d   e     f

    expected_result = True
    result = tree_includes(a, "a")

    # Check if result matches expected result
    if result == expected_result:
        print("Test 2 passed!")
    else:
        print("Test 2 failed!")

# Call your test case function
test_tree_includes_2()

# Test 3
def test_tree_includes_3():
    a = Node("a")
    b = Node("b")
    c = Node("c")
    d = Node("d")
    e = Node("e")
    f = Node("f")

    a.left = b
    a.right = c
    b.left = d
    b.right = e
    c.right = f

    #      a
    #    /   \
    #   b     c
    #  / \     \
    # d   e     f

    expected_result = False
    result = tree_includes(a, "n")

    # Check if result matches expected result
    if result == expected_result:
        print("Test 3 passed!")
    else:
        print("Test 3 failed!")

# Call your test case function
test_tree_includes_3()

# Test 4
def test_tree_includes_4():
    a = Node("a")
    b = Node("b")
    c = Node("c")
    d = Node("d")
    e = Node("e")
    f = Node("f")
    g = Node("g")
    h = Node("h")

    a.left = b
    a.right = c
    b.left = d
    b.right = e
    c.right = f
    e.left = g
    f.right = h

    #      a
    #    /   \
    #   b     c
    #  / \     \
    # d   e     f
    #    /       \
    #   g         h

    expected_result = True
    result = tree_includes(a, "f")

    # Check if result matches expected result
    if result == expected_result:
        print("Test 4 passed!")
    else:
        print("Test 4 failed!")

# Call your test case function
test_tree_includes_4()

# Test 5
def test_tree_includes_5():
    a = Node("a")
    b = Node("b")
    c = Node("c")
    d = Node("d")
    e = Node("e")
    f = Node("f")
    g = Node("g")
    h = Node("h")

    a.left = b
    a.right = c
    b.left = d
    b.right = e
    c.right = f
    e.left = g
    f.right = h

    #      a
    #    /   \
    #   b     c
    #  / \     \
    # d   e     f
    #    /       \
    #   g         h

    expected_result = False
    result = tree_includes(a, "p")

    # Check if result matches expected result
    if result == expected_result:
        print("Test 5 passed!")
    else:
        print("Test 5 failed!")

# Call your test case function
test_tree_includes_5()

# Test 6
def test_tree_includes_6():
    expected_result = False
    result = tree_includes(None, "b")

    # Check if result matches expected result
    if result == expected_result:
        print("Test 6 passed!")
    else:
        print("Test 6 failed!")

# Call your test case function
test_tree_includes_6()
