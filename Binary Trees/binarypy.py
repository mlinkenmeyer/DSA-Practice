class Node: 
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


# def depthFirstValues(root):
#     if root is None:
#         return []
    
#     result = []
#     stack = [root]

#     while stack:
#         current = stack.pop()
#         result.append(current.val)

#         if current.right:
#             stack.append(current.right)
#         if current.left:
#             stack.append(current.left)

#     return result
        

def depthFirstValues(root):
    if root is None:
        return []
    
    leftValues = depthFirstValues(root.left)
    rightValues = depthFirstValues(root.right)

    return [root.val, leftValues, rightValues]


