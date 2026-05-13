from collections import deque

graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = ["Bishop"]
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

def person_is_programmer(name):
    return name[-1] == 'p' # a person is a programmer if his/her name ends with p

def bfs(name):
    search_queue = deque()
    search_queue += graph[name] # the array gets merged when added to the queue
    searched = set()

    while search_queue: # while the search queue isn't empty
        person = search_queue.popleft()

        if not person in searched:
            if person_is_programmer(person):
                print(person + " is a programmer!")
                return True
            else:
                search_queue += graph[person] # add the person to the end of the queue (FIFO)
                searched.add(person)

    return False

bfs("you")
