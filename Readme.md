# Gallery Face Scan

## Overview
Gallery Face Scan is an application designed to automatically classify and group images in a gallery based on unique faces. The system employs facial recognition clustering to identify and organize photos containing the same individual's face, making it easier to access and manage images.

## Features
- **Automated Face Clustering**: Uses facial recognition to detect and group images containing the same individual.
- **Unsupervised Learning**: Groups unlabeled faces without prior labels.
- **Scalability**: Designed to work efficiently with large image galleries.
- **Robust Image Handling**: Handles variations in image quality, lighting, and angles.
- **Advanced Search Functionality**: Incorporates BLIP + CLIP for image inference and enhanced search capabilities.
- **Multi-Face Processing**: Capable of processing images with multiple faces and clustering them accordingly.
## Tech Stack
- **Face Recognition**: Facenet
- **Clustering Algorithm**: K-Nearest Neighbors (KNN)
- **Facial Feature Alignment**: FaceAlignment
- **Image Search**: BLIP + CLIP for semantic image retrieval

## Usage
1. Upload or point the system to an image gallery.
2. The system will process the images and cluster them based on facial features.
3. Use the search functionality to find images using text descriptions or related images.

## Future Enhancements
- Integration with cloud storage for large-scale galleries.
- Improved clustering accuracy using deep learning-based models.
- Real-time face recognition for video processing.

---
Developed by Vasudha Wiman.

