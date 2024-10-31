
# Fyrre Magazine 🗞️

**Fyrre Magazine** is a dynamic magazine website built using **React**, **Vite**, and **Tailwind CSS**. The platform features a clean and modern design, providing users with an engaging experience to explore various magazines, podcasts, and authors.

<div  align="center">
 
![Logo](https://github.com/user-attachments/assets/c7366f15-b7ce-428a-974e-2959a537c33b)
</div>

## Project Overview 📖

**Fyrre Magazine** aims to offer a diverse range of content that includes a variety of magazines, podcasts, and authors. The site is designed to facilitate easy access to information and inspiration across different fields. Users can view detailed information about each magazine, podcast, or author, allowing them to broaden their horizons and discover new content. The site also provides organizational tools such as sorting and filtering options, enhancing the user experience by making it easier to find what they're looking for. 🔍

## Features ✨

- **User-Friendly Navigation:** Access various sections, including magazines, podcasts, and authors.
- **Dynamic Content:** Data is managed through a JSON file, ensuring easy updates and scalability.
- **Sorting and Filtering:** Sort and filter options for organizing content based on selected categories.
- **Dark Theme:** Users can toggle between light and dark themes for a personalized experience. 🌙
- **Responsive Design:** Fully responsive design that adapts seamlessly to all device sizes. 📱💻

## Screenshots

 <table align="center">
  <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/e2e2a4c0-55ec-405f-8ca6-817110cb2872" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/b728195c-7716-4ac7-8f9a-ca7adae04b33" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/7bb9379c-1521-49ad-9cd8-31550803e8a1" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/db840eaf-f8bd-4692-ba90-e480978d36a1" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/fbd773cb-ffb5-4b64-97c4-5d66407f8a54" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/02191cea-3be1-4669-af3d-05d0d3ca3bc1" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/948d59ae-c280-44eb-8ac0-47fb5ea63318" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/af21c93b-c793-494e-ad72-7ef61b29204f" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/6643474b-b1a0-4ff2-8de1-140a0b1b993d" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/fd2ff617-88e5-4d75-b985-1968bc15f205" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img src="https://github.com/user-attachments/assets/ae5c1a2f-1848-467a-9ae1-e142c68e965f" alt="Image" /></td>
    <td><img src="https://github.com/user-attachments/assets/016f28bd-0e3e-4a45-8347-c3163bf8f17e" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img width='320px' src="https://github.com/user-attachments/assets/ed78e829-d12b-4aef-8f07-fe8173fba75c" alt="Image" /></td>
    <td><img width='320px' src="https://github.com/user-attachments/assets/45efed36-be0c-46ad-85cd-d1e2e05d5085" alt="Image" /></td>
  </tr>
  <tr align='center'>
    <td><img width='320px' src="https://github.com/user-attachments/assets/933ac409-813c-45fa-ad43-a90f68a62213" alt="Image" /></td>
    <td><img width='320px' src="https://github.com/user-attachments/assets/86ba5385-667c-4bb8-b80e-90fde533817b" alt="Image" /></td>
  </tr>
</table>

## Screen Record ⏺️

https://github.com/user-attachments/assets/74cf14a1-807f-4740-ab5f-172b3d40330d


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
