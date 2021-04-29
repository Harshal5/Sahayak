from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals
from flask import Flask, json, jsonify, request
import os
from werkzeug.utils import secure_filename

UPLOAD_FOLDER = os.path.join(os.getcwd(), "images")
ALLOWED_EXTENSIONS = set(["jpg", "jpeg", "png"])


def allowed_file(filename):
    return "." in filename and filename.rsplit(".", 1)[1].lower() in ALLOWED_EXTENSIONS


app = Flask(__name__)
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

import tensorflow as tf
import numpy as np
import cv2
import matplotlib.pyplot as plt
import shutil
from tensorflow.keras.preprocessing import image
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D

np.random.seed(1)


def train_test_split():
    path_root = "/gdrive/MyDrive/SE/data2"
    for folder in os.listdir(path_root):
        train_path = os.path.join("/gdrive/MyDrive/SE/dataset2/train", folder)
        os.mkdir(train_path)
        ori_path = os.path.join(path_root, folder)
        images_list = os.listdir(ori_path)
        print(images_list)
        length = len(images_list)
        print("length of original file:", length)
        train_ratio = length // 10
        count = 0
        img_count = train_ratio * 8
        print("count of file in train folder", img_count)
        for img_file in images_list:
            if count < img_count:
                img_path = os.path.join(ori_path, img_file)
                shutil.move(img_path, train_path)
                count += 1
            else:
                break


def view_image():
    path = "./dataset_Large/train/1/1.jpg"
    img = cv2.imread(path)
    cv2_imshow(img)
    print(img.shape)
    print(img.max())


def check_images():
    path_root = "./dataset_Large"
    train_path = os.path.join(path_root, "train")
    test_path = os.path.join(path_root, "test")
    for folder in os.listdir(train_path):
        if (len(os.listdir(os.path.join(test_path, folder)))) != 240:
            print(os.path.join(test_path, folder))
            print(len(os.listdir(os.path.join(test_path, folder))))
            print(os.path.join(train_path, folder))
            print(len(os.listdir(os.path.join(train_path, folder))))


data_gen_train = image.ImageDataGenerator(rescale=1.0 / 255)
data_gen_valid = image.ImageDataGenerator(rescale=1.0 / 255)

num_classes = 35
image_shape = (128, 128, 3)
weights = "./vgg16_weights_tf_dim_ordering_tf_kernels_notop.h5"
base_model = tf.keras.applications.VGG16(
    weights=weights, input_shape=image_shape, include_top=False
)
base_model.trainable = True

head_model = base_model.output
head_model = GlobalAveragePooling2D()(head_model)
head_model = Dense(128, activation="relu")(head_model)
head_model = Dense(35, activation="softmax")(head_model)

model = Model(inputs=base_model.input, outputs=head_model)
model.summary()

model = tf.keras.models.load_model("./my_vggLargeDatasetModel.h5")


def plots():
    plt.plot(history.history["accuracy"])
    plt.plot(history.history["val_accuracy"])
    plt.title("model accuracy")
    plt.ylabel("accuracy")
    plt.xlabel("epoch")
    plt.legend(["train", "test"], loc="upper left")
    plt.show()

    # summarize history for loss
    plt.plot(history.history["loss"])
    plt.plot(history.history["val_loss"])
    plt.title("model loss")
    plt.ylabel("loss")
    plt.xlabel("epoch")
    plt.legend(["train", "test"], loc="upper left")
    plt.show()


@app.route("/api/test", methods=["GET"])
def hello():
    return jsonify({"GET on homepage": "Hello World"})


@app.route("/api/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        print("not file in req")
        return jsonify({"status": 200, "data": "No file in request"})

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"status": 200, "data": "No Selected filename"})

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))

    path = os.path.join(app.config["UPLOAD_FOLDER"], file.filename)
    original_image = cv2.imread(path)
    resized_image = cv2.resize(original_image, (128, 128))
    x = np.expand_dims(resized_image, axis=0)
    features = model.predict(x)
    letters = "123456789abcdefghijklmnopqrstuvwxyz"
    return jsonify({"prediction": letters[np.argmax(features[0])]})


@app.route("/api/bug", methods=["POST"])
def bug():
    request_data = request.get_json()
    bug = {
        "subject": request_data["subject"],
        "description": request_data["description"],
    }
    out_file = open("./BugReports/Bug.json", "w")
    json.dump(bug, out_file, indent=4)
    return jsonify(bug)


if __name__ == "__main__":
    app.run(host="0.0.0.0", threaded=True, port=5000)
