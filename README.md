# Deep-Live-Cam (Pinokio Launcher)

1-click Pinokio launcher for [Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam).

## What is Deep-Live-Cam?

Real-time face swap and one-click video deepfake with only a single image. Features:

- **Live webcam face swap** - Use any face in real-time video calls
- **Video deepfake** - Replace faces in videos with one click
- **Multiple faces** - Swap different faces on multiple subjects simultaneously
- **Mouth retention** - Keep original mouth movement for accurate lip sync
- **Cross-platform GPU support** - CUDA, CoreML (Apple Silicon), DirectML (Windows), OpenVINO (Intel)

## What this launcher does

- Clones the Deep-Live-Cam source repository
- Creates a Python virtual environment
- Installs all Python dependencies
- Downloads required ONNX models (GFPGANv1.4, inswapper_128_fp16)
- Detects your platform and installs appropriate onnxruntime backend
- Starts the GUI application

## Usage

### Install

Click **Install** to:

1. Clone `https://github.com/hacksider/Deep-Live-Cam` into `app`
2. Create a Python virtual environment
3. Install dependencies from `requirements.txt`
4. Download ONNX models from HuggingFace (~300MB)
5. Install platform-appropriate onnxruntime (DirectML/CoreML)

### Start

Click **Start** to launch the Deep-Live-Cam GUI.

The application will open automatically. If it doesn't, check the terminal output.

### Update

Click **Update** to pull latest changes and reinstall dependencies.

### Reset

Click **Reset** to remove the cloned `app` folder and all local install artifacts.

## How to Use Deep-Live-Cam

### Webcam Mode (Live Face Swap)

1. Click **Start** to launch the app
2. Select a source face image
3. Select which camera to use
4. Click **Live** button
5. Wait for preview (10-30 seconds initial load)
6. Use OBS or similar to capture the window for streaming

### Image/Video Mode

1. Click **Start** to launch the app
2. Select a source face image
3. Select a target image or video
4. Click **Start** to process
5. Output saved in a directory named after the target file

## System Requirements

- **Python**: 3.11 recommended (Pinokio handles this)
- **RAM**: 8GB minimum, 16GB recommended
- **GPU**: Optional but highly recommended for real-time performance
  - **NVIDIA**: CUDA 12.x + cuDNN
  - **Apple Silicon**: M1/M2/M3 (CoreML)
  - **Windows**: Any DirectX 12 GPU (DirectML)
  - **Intel**: Integrated or discrete GPU (OpenVINO)
- **Linux users** may need: `sudo apt install python3-dev build-essential`

## Notes

- First run downloads models from HuggingFace (~300MB)
- Real-time performance depends on your GPU
- The software includes built-in checks to prevent processing inappropriate content
- **Use responsibly**: Obtain consent when using real people's faces

## Ethical Use

This software is designed for creative and productive purposes. Users are expected to:

- Obtain consent when using real people's faces
- Clearly label output as deepfake when sharing online
- Use the software in compliance with applicable laws
- Respect the rights and dignity of others

## Credits

- [Deep-Live-Cam](https://github.com/hacksider/Deep-Live-Cam) by hacksider
- [insightface](https://github.com/deepinsight/insightface) for the face detection library
- Original [roop](https://github.com/s0md3v/roop) by s0md3v
