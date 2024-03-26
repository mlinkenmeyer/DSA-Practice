class Node: 
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

def breadthFirstValues(root): 
    if root is None:
        return []
    
    values = []
    queue = [root] 
    
    while queue:
        current = queue.pop()
        values.append(current.val)

        if current.left is not None:
            queue.append(current.left)
        if current.right is not None:
            queue.append(current.right)
    
    return values
