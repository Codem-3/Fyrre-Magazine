
# Fyrre Magazine 🌟

**Fyrre Magazine** is a dynamic magazine website built using **React**, **Vite**, and **Tailwind CSS**. The platform features a clean and modern design, providing users with an engaging experience to explore various magazines, podcasts, and authors. 🎉

## Project Overview 📖

**Fyrre Magazine** aims to offer a diverse range of content that includes a variety of magazines, podcasts, and authors. The site is designed to facilitate easy access to information and inspiration across different fields. Users can view detailed information about each magazine, podcast, or author, allowing them to broaden their horizons and discover new content. The site also provides organizational tools such as sorting and filtering options, enhancing the user experience by making it easier to find what they're looking for. 🔍

## Screenshots

 <table align="center">
  <tr align='center'>
    <td><img src="" alt="Image" /></td>
    <td><img src="" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img src="" alt="Image" /></td>
    <td><img src="" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img src="" alt="Image" /></td>
    <td><img src="" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img src="" alt="Image" /></td>
    <td><img src="" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img width='320px' src="" alt="Image" /></td>
    <td><img width='320px' src="" alt="Image" /></td>
  </tr>
</table>

## Features ✨

- **User-Friendly Navigation:** Access various sections, including magazines, podcasts, and authors.
- **Dynamic Content:** Data is managed through a JSON file, ensuring easy updates and scalability.
- **Sorting and Filtering:** Sort and filter options for organizing content based on selected categories.
- **Dark Theme:** Users can toggle between light and dark themes for a personalized experience. 🌙
- **Responsive Design:** Fully responsive design that adapts seamlessly to all device sizes. 📱💻

## Pages 🗂️

The project consists of **7 main pages**:

1. **Landing Page:** Overview of the site and its sections, including magazines, podcasts, and authors.
2. **Magazines:** Dedicated page to display all available magazines with links to individual magazine details.
3. **Podcasts:** Similar structure for podcasts, allowing users to explore each podcast in detail.
4. **Authors:** A dedicated section for authors, showcasing their works and biographies.
5. **Magazine Details:** Individual pages for each magazine, containing detailed information and articles.
6. **Podcast Details:** Individual pages for each podcast with detailed descriptions and episodes.
7. **Author Details:** Pages dedicated to individual authors, presenting their works and contributions.

## Data Management 💾

All site data is dynamically managed within a JSON file. This approach ensures that the content can be easily modified and updated according to the site's requirements.

## Theme Options 🎨

The site includes a **Dark Theme** feature, allowing users to switch themes for a more comfortable viewing experience.

## Responsive Design 📐

Fyrre Magazine is designed to be fully responsive, ensuring a smooth user experience on various devices, including desktops, tablets, and smartphones.

## Code Quality 🛠️

The codebase is structured with a focus on **Clean Code** principles, promoting ease of maintenance and future modifications. The project files are organized logically for optimal development workflow.

The project is organized to ensure clarity and ease of future development:

```
└── 📁src
    └── 📁assets
        └── 📁images
            └── 📁for_landing
                └── closeEyes.jfif
                └── magazin-cover.png
            └── Logo.png
    └── 📁components
        └── 📁bars
            └── Footer.jsx
            └── Header.jsx
        └── 📁custom
            └── NewsBar.jsx
        └── 📁for_landing
            └── AuthorsCard.jsx
            └── BreakNews.jsx
            └── HeroSection.jsx
            └── MagazineCard.jsx
            └── PodcastCard.jsx
            └── PrintMagazine.jsx
        └── index.js
    └── 📁data
        └── Authors.json
        └── Magazine.json
        └── Podcast.json
    └── 📁pages
        └── 📁author
            └── AuthorDetailsPage.jsx
            └── AuthorsPage.jsx
        └── 📁magazine
            └── MagazineDetailsPage.jsx
            └── MagazinePage.jsx
        └── 📁podcast
            └── PodcastDetailsPage.jsx
            └── PodcastPage.jsx
        └── index.js
        └── LandingPage.jsx
    └── 📁router
        └── index.jsx
    └── 📁styles
        └── global.css
    └── 📁utils
        └── icons.util.jsx
    └── App.jsx
    └── main.jsx
```

## Getting Started 🚀

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/3mohamed-abdelfattah/Fyrre-Magazine.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Fyrre-Magazine
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the application.

## Contributing 🤝

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.