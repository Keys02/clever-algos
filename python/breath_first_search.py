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
    return name[-1] == 'p'

def bfs(name):
    search_queue = deque()
    search_queue += graph[name]
    searched = set()

    while search_queue: # while the search queue isn't empty
        person = search_queue.popleft()

        if not person in searched:
            if person_is_programmer(person):
                print(person + " is a programmer!")
                return True
            else:
                search_queue += graph[person]
                searched.add(person)

    return False

bfs("you")
