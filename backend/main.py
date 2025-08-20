import uvicorn 
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List


class Fruit(BaseModel):
    name: str

class Fruits(BaseModel):
    fruits: List[Fruit]

app = FastAPI()

origins = [
    "http://localhost:5173" 
]

app.add_middleware(
        CORSMiddleware,
        allow_origins = origins,
        allow_credentials = True, # allows us to send jwt token
        allow_methods = ["*"], # methods like get, post , put, delete
        allow_headers = ["*"],
)

memory_db = {"fruits": []}

@app.get("/fruits", response_model = Fruits)
def get_fruits():
    return Fruits(fruits = memory_db["fruits"])

@app.post("/fruits", response_model= Fruit)
def add_fruit(fruit: Fruit):
    memory_db["fruits"].append(fruit)
    return fruit

@app.delete("/fruits/{fruit_name}", response_model=Fruit)
def delete_fruit(fruit_name: str):
    for fruit in memory_db["fruits"]:
        if fruit.name.lower() == fruit_name.lower():
            memory_db["fruits"].remove(fruit)
            return fruit
    raise HTTPException(status_code=404, detail="Fruit not found")


if __name__ == "__main__":
    uvicorn.run(app, host = "0.0.0.0", port = 8000)






