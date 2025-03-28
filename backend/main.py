from fastapi import FastAPI, Form # type: ignore
from typing import Annotated
import os

app = FastAPI()
HARDCODED_DIRECTORY = "Users/vasudha/photo_gallery/backend"

@app.post("/modify-filename/")
def modify_filename(file_name: Annotated[str, Form()],directory: Annotated[str, Form()],user_name: Annotated[str, Form()],new_name: Annotated[str, Form()]):
    current_path = os.path.join(HARDCODED_DIRECTORY,user_name)
    new_path = os.path.join(current_path,directory)
    n_path = os.path.join(new_path,file_name)
    file_name_without_ext, extension = os.path.splitext(n_path)
    new_file_path = os.path.join(new_path , new_name + extension)
    
    if os.path.exists(h):
        shutil.move(current_file_path, modified_file_path)  # Move file to new location
        return {
            "message": "File moved successfully",
            "current_directory": n_path,
            "modified_path": new_file_path
        }
    else:
        return {"error": "File not found", "current_directory": HARDCODED_DIRECTORY}

    
