# To Do List Application

A modern, responsive to-do list web application built with vanilla JavaScript, HTML, and CSS. Features a sleek dark theme with gradient backgrounds and smooth animations.

<img width="1020" height="599" alt="image" src="https://github.com/user-attachments/assets/25356f98-ab78-42bd-9b7c-8a59a0a5c813" />


## 🌟 Features

- ✅ **Add Tasks** - Quickly add new tasks to your list
- ✏️ **Edit Tasks** - Modify existing tasks inline
- 🗑️ **Delete Tasks** - Remove completed or unwanted tasks
- ✔️ **Mark Complete** - Toggle tasks between completed and incomplete status
- 📊 **Task Counter** - Real-time tracking of completed and uncompleted tasks
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Clean dark theme with blue gradient background
- 💾 **No Dependencies** - Pure vanilla JavaScript, no frameworks required

## 🖼️ Screenshots

### Desktop View
The app features a centered card layout with a gradient background from black to deep blue.

### Mobile View
Fully responsive design that adapts to smaller screens with optimized button sizes and spacing.

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software or dependencies required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prithvi-boi/todoapp.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd todoapp
   ```

3. **Open the application**
   - Simply open `index.html` (or your main HTML file) in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

4. **Start using the app**
   - Navigate to `http://localhost:8000` if using a local server
   - Or double-click the HTML file to open directly in your browser

## 📖 Usage

### Adding a Task
1. Type your task in the input field
2. Click the "Add" button or press Enter
3. Your task will appear in the task list below

### Marking a Task as Complete
1. Click the white square box on the left of any task
2. The box turns green and the task text gets crossed out
3. The completed counter increases automatically

### Editing a Task
1. Click the "Edit" button on any task
2. The button turns green and changes to "Save"
3. Modify the task text inline
4. Click "Save" to confirm changes

### Deleting a Task
1. Click the red "Delete" button on any task
2. The task is immediately removed from the list
3. Task counters update automatically

### Task Statistics
- **Complete**: Shows the number of completed tasks
- **Uncompleted**: Shows the number of pending tasks

## 🏗️ Project Structure

```
todoapp/
│
├── index.html          # Main HTML structure
├── Todolist.css        # Styling and responsive design
├── Todolist.js         # Application logic and functionality
└── README.md           # Project documentation
```

## 🎨 Design Features

### Color Scheme
- **Background Gradient**: Black to RGB(0, 0, 143)
- **Main Container**: RGB(25, 25, 25)
- **Task Items**: RGB(35, 35, 35)
- **Primary Accent**: Blue
- **Completion Indicator**: Green (#00FF38)
- **Delete Button**: Red

### Responsive Breakpoints
- **Desktop**: Full-width layout (max-width: 900px)
- **Tablet**: 768px and below
- **Mobile**: 480px and below

## 💻 Technical Details

### Technologies Used
- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with Flexbox and Grid
- **JavaScript (ES6)**: Dynamic DOM manipulation

### Key JavaScript Features
- Event listeners for user interactions
- Dynamic DOM element creation
- State management for task completion
- Real-time counter updates

## 🔧 Customization

### Changing Colors
Edit `Todolist.css` to modify the color scheme:
```css
#mainbg {
    background: linear-gradient(45deg, black, rgb(0, 0, 143));
}
```

### Modifying Task Styling
Adjust task appearance in the `.task_txt` and `li` classes:
```css
li {
    background-color: rgb(35, 35, 35);
    /* Your custom styles */
}
```

## 🐛 Known Issues

- Task data is not persisted (refreshing the page will clear all tasks)
- No local storage implementation yet

## 🚧 Future Enhancements

- [ ] Add local storage support for data persistence
- [ ] Implement drag-and-drop task reordering
- [ ] Add task categories/tags
- [ ] Include due dates and reminders
- [ ] Add task priority levels
- [ ] Export tasks to CSV/JSON
- [ ] Dark/Light theme toggle
- [ ] Search and filter functionality
- [ ] Task statistics and analytics

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👤 Author

**Prithvi**

- GitHub: [@Prithvi-boi](https://github.com/Prithvi-boi)

## 🙏 Acknowledgments

- Inspired by modern task management applications
- Built as a learning project for vanilla JavaScript DOM manipulation
- Thanks to the web development community for inspiration and resources

## 📞 Contact

For questions or feedback, please open an issue on GitHub.

---

**Made with ❤️ by Prithvi**

*Last updated: February 2026*
