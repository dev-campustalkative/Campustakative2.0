import os

def rename_files_to_lowercase(directory):
    # Check if the provided directory exists
    if not os.path.exists(directory):
        print(f"Directory '{directory}' does not exist.")
        return

    # Get the list of files in the directory
    file_list = os.listdir(directory)

    for filename in file_list:
        # Check if the file is a regular file (not a directory)
        if os.path.isfile(os.path.join(directory, filename)):
            # Get the lowercase version of the filename
            new_filename = filename.lower()

            # Create the full paths of the old and new file names
            old_path = os.path.join(directory, filename)
            new_path = os.path.join(directory, new_filename)

            # Rename the file
            os.rename(old_path, new_path)
            print(f"Renamed: {filename} -> {new_filename}")

if __name__ == "__main__":
    # Replace 'path/to/your/directory' with the actual directory path
    directory_path = "/"
    rename_files_to_lowercase(directory_path)