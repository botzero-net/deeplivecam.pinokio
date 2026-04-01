module.exports = {
  run: [
    {
      when: "{{!exists('app')}}",
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/hacksider/Deep-Live-Cam.git app"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        venv: "env",
        message: [
          "pip install --upgrade pip",
          "pip install -r requirements.txt"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app/models",
        message: [
          "curl -L -o GFPGANv1.4.onnx 'https://huggingface.co/hacksider/deep-live-cam/resolve/main/GFPGANv1.4.onnx'",
          "curl -L -o inswapper_128_fp16.onnx 'https://huggingface.co/hacksider/deep-live-cam/resolve/main/inswapper_128_fp16.onnx'"
        ]
      }
    },
    {
      when: "{{platform === 'win32'}}",
      method: "shell.run",
      params: {
        path: "app",
        venv: "env",
        message: [
          "pip uninstall onnxruntime onnxruntime-gpu onnxruntime-directml -y",
          "pip install onnxruntime-directml==1.21.0"
        ]
      }
    },
    {
      when: "{{platform === 'darwin' && arch === 'arm64'}}",
      method: "shell.run",
      params: {
        path: "app",
        venv: "env",
        message: [
          "pip uninstall onnxruntime onnxruntime-silicon -y",
          "pip install onnxruntime-silicon==1.13.1"
        ]
      }
    }
  ]
}
