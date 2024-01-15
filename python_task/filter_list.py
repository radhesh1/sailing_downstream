# filter_list.py

def filter_list(input_list):
    # Check if the length of the input list is a multiple of 10
    if len(input_list) % 10 != 0:
        raise ValueError("Error: The length of the list must be a multiple of 10.")

    # Remove items at positions which are a multiple of 2 or 3
    filtered_list = [x for i, x in enumerate(input_list) if (i + 1) % 2 != 0 and (i + 1) % 3 != 0]

    return filtered_list

if __name__ == "__main__":
    try:
        # Take input from the user
        input_list_str = input("Enter a list of integers separated by space: ")
        
        # Convert the input string to a list of integers
        input_list = list(map(int, input_list_str.split()))

        # Call the filter_list function
        filtered_result = filter_list(input_list)

        # Print the filtered list
        print("Filtered List:", filtered_result)
    except ValueError as e:
        print(e)
