import os
import tensorflow as tf
from tensorflow.keras.preprocessing.image import (
    ImageDataGenerator,
    img_to_array,
    load_img,
)
from tensorflow.keras.models import Sequential, Model
from tensorflow.keras.layers import (
    Input,
    Flatten,
    Dense,
    Dropout,
    Conv2D,
    MaxPooling2D,
    GlobalAveragePooling2D,
)
import numpy as np
import matplotlib.pyplot as plt
from tensorflow.keras.applications.vgg16 import preprocess_input, decode_predictions

path_root = "./dataset"
train_path = os.path.join(path_root, "train")
test_path = os.path.join(path_root, "test")

data_gen_train = ImageDataGenerator(rescale=1.0 / 255)
data_gen_valid = ImageDataGenerator(rescale=1.0 / 255)

train_generator = data_gen_train.flow_from_directory(
    train_path, target_size=(128, 128), class_mode="categorical", batch_size=256
)

validation_generator = data_gen_valid.flow_from_directory(
    test_path, target_size=(128, 128), class_mode="categorical", batch_size=256
)

image_shape = (128, 128, 3)


def create_model():
    base_model = tf.keras.applications.VGG16(
        weights="imagenet", input_shape=image_shape, include_top=False
    )
    base_model.trainable = False

    head_model = base_model.output
    head_model = GlobalAveragePooling2D()(head_model)
    head_model = Dense(128, activation="relu")(head_model)
    head_model = Dense(35, activation="softmax")(head_model)
    model = Model(inputs=base_model.input, outputs=head_model)
    return model


model = create_model()
model.compile(optimizer="Adam", loss="categorical_crossentropy", metrics=["accuracy"])
epochs = 10
model.save("./my_vggmodel.h5")
H = model.fit(
    train_generator, validation_data=validation_generator, epochs=epochs, verbose=1
)
score = model.evaluate(validation_generator)
print(score)
