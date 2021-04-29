import shutil, os

path_root = "./data"


def train_test_split():
    for folder in os.listdir(path_root):
        train_path = os.path.join("./dataset/train", folder)
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


def check():
    path_root = "./dataset"
    train_path = os.path.join(path_root, "train")
    test_path = os.path.join(path_root, "test")
    for folder in os.listdir(train_path):
        if (len(os.listdir(os.path.join(test_path, folder)))) != 960:
            print(os.path.join(test_path, folder))
            print(len(os.listdir(os.path.join(test_path, folder))))
            print(os.path.join(train_path, folder))
            print(len(os.listdir(os.path.join(train_path, folder))))


train_test_split()
check()
