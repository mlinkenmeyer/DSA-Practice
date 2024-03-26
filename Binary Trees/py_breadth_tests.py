from py_breadth_first import Node, breadthFirstValues

def test_breadthFirstValues_1():
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

    expected_result = ["a", "b", "c", "d", "e", "f"]
    result = breadthFirstValues(a)

    # Check if result matches expected result
    if result == expected_result:
        print("Test 1 passed!")
    else:
        print("Test 1 failed!")

# Call your test case function
test_breadthFirstValues_1()

def test_breadthFirstValues_2():
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

    expected_result = ["a", "b", "c", "d", "e", "f", "g", "h"]
    result = breadthFirstValues(a)

    # Check if result matches expected result
    if result == expected_result:
        print("Test 2 passed!")
    else:
        print("Test 2 failed!")

# Call your test case function
test_breadthFirstValues_2()

def test_breadthFirstValues_3():
    a = Node("a")

    expected_result = ["a"]
    result = breadthFirstValues(a)

    # Check if result matches expected result
    if result == expected_result:
        print("Test 3 passed!")
    else:
        print("Test 3 failed!")

# Call your test case function
test_breadthFirstValues_3()

def test_breadthFirstValues_4():
    a = Node("a")
    b = Node("b")
    c = Node("c")
    d = Node("d")
    e = Node("e")
    x = Node("x")

    a.right = b
    b.left = c
    c.left = x
    c.right = d
    d.right = e

    expected_result = ["a", "b", "c", "x", "d", "e"]
    result = breadthFirstValues(a)

    # Check if result matches expected result
    if result == expected_result:
        print("Test 4 passed!")
    else:
        print("Test 4 failed!")

# Call your test case function
test_breadthFirstValues_4()

def test_breadthFirstValues_5():
    expected_result = []
    result = breadthFirstValues(None)

    # Check if result matches expected result
    if result == expected_result:
        print("Test 5 passed!")
    else:
        print("Test 5 failed!")

# Call your test case function
test_breadthFirstValues_5()
