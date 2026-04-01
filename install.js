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
      when: "{{!exists('app/models/GFPGANv1.4.onnx')}}",
      method: "shell.run",
      params: {
        path: "app/models",
        message: [
          "curl -L -o GFPGANv1.4.onnx 'https://huggingface.co/hacksider/deep-live-cam/resolve/main/GFPGANv1.4.onnx'"
        ]
      }
    },
    {
      when: "{{!exists('app/models/inswapper_128_fp16.onnx')}}",
      method: "shell.run",
      params: {
        path: "app/models",
        message: [
          "curl -L -o inswapper_128_fp16.onnx 'https://huggingface.co/hacksider/deep-live-cam/resolve/main/inswapper_128_fp16.onnx'"
        ]
      }
    }
  ]
}
