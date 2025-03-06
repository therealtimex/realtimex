from fastapi.staticfiles import StaticFiles
# from starlette.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware

# load_dotenv()  # take environment variables from .env.

app = FastAPI()

# serves static files from the /frontend/dist directory
# app.mount("/frontend", StaticFiles(directory="./frontend/dist"), name="frontend")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return FileResponse("./index.html")