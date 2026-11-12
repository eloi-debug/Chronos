import http.server, socketserver

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

with socketserver.TCPServer(("", 8000), Handler) as s:
    print("Open http://localhost:8000  (no-cache dev server)")
    s.serve_forever()
