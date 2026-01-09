from duckduckgo_search import DDGS
import requests
from PIL import Image
from io import BytesIO
import matplotlib.pyplot as plt
import os

def show_dish_image(dish_name):
    print(f"Searching for image: {dish_name}")
    with DDGS() as ddgs:
        results = ddgs.images(
            keywords=dish_name,
            region="wt-wt",
            safesearch="Off",
            size="Medium",
            max_results=1
        )

        results = list(results)
        if not results:
            print("❌ No image found")
            return

        image_url = results[0]["image"]
        print(f"Found image URL: {image_url}")

    # Download image
    print("Downloading image...")
    response = requests.get(image_url)
    img = Image.open(BytesIO(response.content))

    # Save image for verification
    output_path = "dish_test.png"
    img.save(output_path)
    print(f"✅ Image saved to {output_path}")

    # Show image (this might fail in headless environments, but we have the saved file)
    try:
        plt.imshow(img)
        plt.axis("off")
        plt.title(dish_name)
        print("Displaying image (if possible)...")
        plt.show()
    except Exception as e:
        print(f"Note: Could not show image window: {e}")

if __name__ == "__main__":
    show_dish_image("chicken biryani")
