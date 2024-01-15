function processList() {
    const inputList = document.getElementById("inputList").value;
    const errorMessage = document.getElementById("errorMessage");
    const outputMessage = document.getElementById("outputMessage");

    // Convert the input string to an array of integers
    const integerList = inputList.split(",").map(Number);

    // Check if the length of the list is a multiple of 10
    if (integerList.length % 10 !== 0) {
        errorMessage.textContent = "Error: The list must be a multiple of 10 in length.";
        outputMessage.textContent = "";
        return;
    }

    // Remove items at positions which are a multiple of 2 or 3
    const processedList = integerList.filter((_, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0);

    errorMessage.textContent = "";
    outputMessage.textContent = "Processed List: " + processedList.join(", ");
}
