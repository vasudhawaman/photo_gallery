import os

def modify_filename(file_path: str, new_name: str) -> str:
    """Modify the filename while keeping the directory and extension unchanged"""
    directory, old_filename = os.path.split(file_path)
    _, extension = os.path.splitext(old_filename)

    # Construct the new file path
    new_file_path = os.path.join(directory, new_name + extension)
    
    return new_file_path

# Example Usage
original_path = "/home/user/documents/file.txt"
new_name = "new_file"

modified_path = modify_filename(original_path, new_name)
print(modified_path)  # Output: /home/user/documents/new_file.txt
