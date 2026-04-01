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
          "pip install --upgrade pip",
          "pip install -r requirements.txt"
        ]
      }
    }
  ]
}
