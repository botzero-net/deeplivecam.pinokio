module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "git pull"
      }
    },
    {
      method: "shell.run",
      params: {
        message: "git pull",
        path: "app"
      }
    },
    {
      method: "shell.run",
      params: {
        path: "app",
        venv: "env",
        message: [
          "pip install -r requirements.txt"
        ]
      }
    },
    {
      when: "{{platform !== 'darwin'}}",
      method: "shell.run",
      params: {
        path: "app",
        venv: "env",
        message: [
          "pip install nvidia-cuda-runtime-cu12 nvidia-cudnn-cu12 nvidia-cublas-cu12",
          "pip install --force-reinstall onnxruntime-gpu==1.21.0"
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
          "pip install --force-reinstall onnxruntime-silicon==1.13.1"
        ]
      }
    }
  ]
}
