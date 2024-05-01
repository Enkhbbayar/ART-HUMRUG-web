import Uzesgelen from "./uzes-module.js";

// Function to get the price category from price value
const getPriceCategory = (price) => {
  if (typeof price === "string" && price.toLowerCase() === "free") {
    return "free";
  } else if (typeof price === "number") {
    if (price >= 1 && price <= 39999) {
      return "lower price";
    } else if (price >= 40000 && price <= 79999) {
      return "middle price";
    } else if (price >= 80000) {
      return "over price";
    }
  }
  return "unknown";
};

// Function to get the date category from event date
const getDateCategory = (eventDate) => {
  const currentDate = new Date();
  const eventDateObj = new Date(eventDate);
  const sevenDaysFromNow = new Date(currentDate);
  sevenDaysFromNow.setDate(currentDate.getDate() + 7);

  if (eventDateObj < currentDate) {
    return "recent";
  } else if (eventDateObj <= sevenDaysFromNow) {
    return "thisweek";
  } else {
    return "upcoming";
  }
};

// Parse URL parameters to get filter values
const usp = new URLSearchParams(decodeURIComponent(document.location.search));

// Extract all checkbox values for each category
const getFilterValues = (paramName) => {
  const values = usp.getAll(paramName); // Collect all selected values
  return values.length > 0 ? values : null; // Return null if no values
};

// Function to check if an item contains the specified keyword
const containsKeyword = (item, keyword) => {
  if (!keyword) {
    return true;
  }

  const lowerKeyword = keyword.toLowerCase();

  const artist_name = item.artist_name ? item.artist_name.toLowerCase() : "";
  const description = item.description ? item.description.toLowerCase() : "";

  return (
    artist_name.includes(lowerKeyword) ||
    description.includes(lowerKeyword)
  );
};

// Fetch the local JSON file and apply filters
fetch("./humrugjson.json")
  .then((result) => result.json())
  .then((data) => {
    const rawData = data.uzesgelen;

    if (!rawData) {
      console.error("Error: No data found.");
      return;
    }

    const filterConditions = {
      date: getFilterValues("date"),
      genre: getFilterValues("genre"),
      venue: getFilterValues("venue"),
      price: getFilterValues("price"),
      exhibitiontype: getFilterValues("exhibitiontype"),
      activities: getFilterValues("activities"),
      keyword: usp.get("keyword"),
    };

    const filteredData = rawData.filter((item) => {
      const itemPriceCategory = getPriceCategory(item.price);
      const itemDateCategory = getDateCategory(item.date);

      const keywordMatches = filterConditions.keyword
        ? containsKeyword(item, filterConditions.keyword)
        : true;

      return Object.entries(filterConditions).every(([key, value]) => {
        if (key === "price") {
          return !value || value.includes(itemPriceCategory);
        } else if (key === "date") {
          return !value || value.includes(itemDateCategory);
        } else if (key === "keyword") {
          return keywordMatches;
        } else {
          return !value || value.includes(item[key]);
        }
      });
    });

    const productsHTML = filteredData.map((prodObj) => {
      const prod = new Uzesgelen(prodObj);
      return prod.Render();
    }).reduce((prev, current) => prev + current, ""); 

    const productSection = document.getElementById("uzesSection");
    if (productSection) {
      productSection.innerHTML = productsHTML;
    } else {
      console.error("Error: Section with ID 'uzesSection' not found.");
    }
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });

  
$(document).ready(function(){
  $(".sub-btn").click(function(){  // Reference class with "."
    $(this).next(".submenu").slideToggle();  // Correct class name and selector
  });
});


