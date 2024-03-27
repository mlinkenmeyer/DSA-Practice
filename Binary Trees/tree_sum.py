class Node: 
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

# recursion 
# def tree_sum(root): 
#     if root is None:
#         return 0
    
#     return root.val + tree_sum(root.left) + tree_sum(root.right)

# iterative
def tree_sum(root): 
    if root is None:
        return 0 
    
    totalSum = 0 

    queue = [ root ]

    while queue:
        current = queue.pop()
        totalSum += current.val
        
        if current.left is not None: 
            queue.append(current.left)
        if current.right is not None: 
            queue.append(current.right)
    
    return totalSum