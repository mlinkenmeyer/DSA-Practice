class Node: 
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


# def tree_includes(root, target): 
#     if root is None:
#         return False

#     queue = [root] 
    
#     while queue:
#         current = queue.pop()
#         if current.val is target:
#             return True
        
#         if current.left is not None: 
#             queue.append(current.left)
#         if current.right is not None: 
#             queue.append(current.right)
    
#     return False

def tree_includes(root, target): 
    if root is None:
        return False
    
    if root.val is target:
        return True 

    return tree_includes(root.left, target) or tree_includes(root.right, target)
    