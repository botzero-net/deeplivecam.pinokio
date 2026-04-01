module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        path: "app",
        venv: "env",
        message: [
          "python run.py"
        ]
      }
    }
  ]
}
