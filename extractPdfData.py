import fitz  # PyMuPDF
import json

# Function to extract text from PDF and convert to JSON
def extract_data_from_pdf(pdf_path):
    doc = fitz.open(pdf_path)
    current_affairs = []

    for page_num in range(doc.page_count):
        page = doc.load_page(page_num)
        text = page.get_text()

        # Manually extract the relevant data (title, description, date, link)
        lines = text.split('\n')
        title = lines[0]  # Example: Extract title from the first line
        description = lines[1]  # Example: Extract description from second line
        date = lines[2]  # Example: Extract date from third line
        link = lines[3]  # Example: Extract link from fourth line

        current_affairs.append({
            'title': title,
            'description': description,
            'date': date,
            'link': link
        })

    # Convert the list of dictionaries to JSON
    with open('public/current-affairs.json', 'w') as json_file:
        json.dump(current_affairs, json_file, indent=4)

# Specify the PDF file path (located in the public folder)
pdf_path = 'public/current-affair (1).pdf'
  # Example PDF file
extract_data_from_pdf(pdf_path)
