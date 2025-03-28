from fastapi import FastAPI
from pydantic import BaseModel
import os

app = FastAPI()

class FileNameRequest(BaseModel):
    file_path: str
    new_name: str

@app.post("/modify-filename/")
def modify_filename(request: FileNameRequest):
    directory, old_filename = os.path.split(request.file_path)
    _, extension = os.path.splitext(old_filename)

    # Construct the new file path
    new_file_path = os.path.join(directory, request.new_name + extension)
    
    return {"modified_path": new_file_path}
