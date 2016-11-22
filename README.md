# Face
Face recognition site

1. Create an account on our site w/ email address.
2. Take picture & learn/train face
3. Next login, use face to authenticate.
-----------Logged in--------------------
4. Show past data on face
    -photos[0].tags.glasses
    -photos[0].tags.age_est
    -photos[0].tags.anger
    -photos[0].tags.disgust
    -photos[0].tags.fear
    -photos[0].tags.happiness
    -photos[0].tags.sadness
    -photos[0].tags.surprise

```
Here is what SkyBiometery returns: 

{
  "status": "success",
  "photos": [
    {
      "url": "https://skybiometry.com/wp-content/uploads/2015/09/eva-2ppl-web-1-e1451908961635.jpg",
      "pid": "F@01da2f7b021f22173fba246103937608_d03f1f9d7a1d0",
      "width": 800,
      "height": 533,
      "tags": [
        {
          "uids": [
            {
              "uid": "eva@sky-test",
              "confidence": 9
            }
          ],
          "label": null,
          "confirmed": false,
          "manual": false,
          "width": 10.5,
          "height": 15.76,
          "yaw": -29,
          "roll": 1,
          "pitch": -9,
          "attributes": {
            "face": {
              "value": "true",
              "confidence": 77
            },
            "gender": {
              "value": "male",
              "confidence": 20
            },
            "glasses": {
              "value": "false",
              "confidence": 59
            },
            "dark_glasses": {
              "value": "false",
              "confidence": 46
            },
            "age_est": {
              "value": "18",
              "confidence": 50
            },
            "mood": {
              "value": "happy",
              "confidence": 41
            },
            "lips": {
              "value": "parted",
              "confidence": 35
            },
            "eyes": {
              "value": "open",
              "confidence": 96
            },
            "neutral_mood": {
              "value": "false",
              "confidence": 0
            },
            "anger": {
              "value": "false",
              "confidence": 32
            },
            "disgust": {
              "value": "false",
              "confidence": 0
            },
            "fear": {
              "value": "false",
              "confidence": 34
            },
            "happiness": {
              "value": "false",
              "confidence": 41
            },
            "sadness": {
              "value": "false",
              "confidence": 0
            },
            "surprise": {
              "value": "false",
              "confidence": 36
            }
          },
          "points": [
            {
              "x": 31.5,
              "y": 23.26,
              "confidence": 85,
              "id": 1024
            },
            {
              "x": 31.38,
              "y": 26.45,
              "confidence": 86,
              "id": 1025
            },
            {
              "x": 31.5,
              "y": 29.46,
              "confidence": 86,
              "id": 1026
            },
            {
              "x": 31.75,
              "y": 32.65,
              "confidence": 86,
              "id": 1027
            },
            {
              "x": 32.75,
              "y": 35.27,
              "confidence": 88,
              "id": 1028
            },
            {
              "x": 34.25,
              "y": 37.52,
              "confidence": 91,
              "id": 1029
            },
            {
              "x": 36.12,
              "y": 39.59,
              "confidence": 92,
              "id": 1030
            },
            {
              "x": 38.38,
              "y": 40.9,
              "confidence": 89,
              "id": 1031
            },
            {
              "x": 40.38,
              "y": 41.09,
              "confidence": 87,
              "id": 1032
            },
            {
              "x": 42,
              "y": 40.34,
              "confidence": 88,
              "id": 1033
            },
            {
              "x": 42.88,
              "y": 38.09,
              "confidence": 87,
              "id": 1034
            },
            {
              "x": 43.62,
              "y": 36.02,
              "confidence": 91,
              "id": 1035
            },
            {
              "x": 44.25,
              "y": 33.77,
              "confidence": 90,
              "id": 1036
            },
            {
              "x": 44.75,
              "y": 31.52,
              "confidence": 90,
              "id": 1037
            },
            {
              "x": 45.25,
              "y": 29.27,
              "confidence": 91,
              "id": 1038
            },
            {
              "x": 45.38,
              "y": 27.02,
              "confidence": 90,
              "id": 1039
            },
            {
              "x": 45.25,
              "y": 24.95,
              "confidence": 87,
              "id": 1040
            },
            {
              "x": 35.5,
              "y": 22.89,
              "confidence": 90,
              "id": 1041
            },
            {
              "x": 36.88,
              "y": 21.95,
              "confidence": 93,
              "id": 1042
            },
            {
              "x": 38.38,
              "y": 21.58,
              "confidence": 95,
              "id": 1043
            },
            {
              "x": 39.88,
              "y": 21.95,
              "confidence": 96,
              "id": 1044
            },
            {
              "x": 41.12,
              "y": 22.89,
              "confidence": 96,
              "id": 1045
            },
            {
              "x": 42.5,
              "y": 22.89,
              "confidence": 94,
              "id": 1046
            },
            {
              "x": 43.38,
              "y": 22.14,
              "confidence": 95,
              "id": 1047
            },
            {
              "x": 44.25,
              "y": 21.95,
              "confidence": 96,
              "id": 1048
            },
            {
              "x": 45.12,
              "y": 21.95,
              "confidence": 96,
              "id": 1049
            },
            {
              "x": 45.38,
              "y": 23.08,
              "confidence": 92,
              "id": 1050
            },
            {
              "x": 42,
              "y": 24.39,
              "confidence": 97,
              "id": 1051
            },
            {
              "x": 42.25,
              "y": 26.27,
              "confidence": 97,
              "id": 1052
            },
            {
              "x": 42.5,
              "y": 28.14,
              "confidence": 95,
              "id": 1053
            },
            {
              "x": 42.75,
              "y": 30.02,
              "confidence": 95,
              "id": 1054
            },
            {
              "x": 40.38,
              "y": 30.96,
              "confidence": 95,
              "id": 1055
            },
            {
              "x": 41.12,
              "y": 31.52,
              "confidence": 96,
              "id": 1056
            },
            {
              "x": 41.88,
              "y": 31.89,
              "confidence": 94,
              "id": 1057
            },
            {
              "x": 42.5,
              "y": 31.52,
              "confidence": 94,
              "id": 1058
            },
            {
              "x": 43,
              "y": 30.96,
              "confidence": 96,
              "id": 1059
            },
            {
              "x": 37,
              "y": 24.39,
              "confidence": 96,
              "id": 1060
            },
            {
              "x": 38,
              "y": 23.83,
              "confidence": 97,
              "id": 1061
            },
            {
              "x": 38.75,
              "y": 23.83,
              "confidence": 97,
              "id": 1062
            },
            {
              "x": 39.5,
              "y": 24.58,
              "confidence": 96,
              "id": 1063
            },
            {
              "x": 38.75,
              "y": 24.77,
              "confidence": 97,
              "id": 1064
            },
            {
              "x": 37.88,
              "y": 24.77,
              "confidence": 97,
              "id": 1065
            },
            {
              "x": 42.5,
              "y": 24.77,
              "confidence": 96,
              "id": 1066
            },
            {
              "x": 43.25,
              "y": 24.02,
              "confidence": 97,
              "id": 1067
            },
            {
              "x": 44,
              "y": 24.02,
              "confidence": 97,
              "id": 1068
            },
            {
              "x": 44.5,
              "y": 24.77,
              "confidence": 96,
              "id": 1069
            },
            {
              "x": 44,
              "y": 25.14,
              "confidence": 97,
              "id": 1070
            },
            {
              "x": 43.25,
              "y": 24.95,
              "confidence": 97,
              "id": 1071
            },
            {
              "x": 37.88,
              "y": 33.4,
              "confidence": 95,
              "id": 1072
            },
            {
              "x": 39.62,
              "y": 33.4,
              "confidence": 94,
              "id": 1073
            },
            {
              "x": 40.88,
              "y": 33.58,
              "confidence": 96,
              "id": 1074
            },
            {
              "x": 41.5,
              "y": 33.77,
              "confidence": 96,
              "id": 1075
            },
            {
              "x": 42.12,
              "y": 33.58,
              "confidence": 96,
              "id": 1076
            },
            {
              "x": 42.75,
              "y": 33.58,
              "confidence": 96,
              "id": 1077
            },
            {
              "x": 43.12,
              "y": 33.58,
              "confidence": 95,
              "id": 1078
            },
            {
              "x": 42.5,
              "y": 34.71,
              "confidence": 93,
              "id": 1079
            },
            {
              "x": 42,
              "y": 35.46,
              "confidence": 91,
              "id": 1080
            },
            {
              "x": 41.38,
              "y": 35.46,
              "confidence": 91,
              "id": 1081
            },
            {
              "x": 40.62,
              "y": 35.46,
              "confidence": 92,
              "id": 1082
            },
            {
              "x": 39.5,
              "y": 34.9,
              "confidence": 92,
              "id": 1083
            },
            {
              "x": 38.38,
              "y": 33.58,
              "confidence": 95,
              "id": 1084
            },
            {
              "x": 40.75,
              "y": 34.33,
              "confidence": 95,
              "id": 1085
            },
            {
              "x": 41.5,
              "y": 34.33,
              "confidence": 95,
              "id": 1086
            },
            {
              "x": 42,
              "y": 34.33,
              "confidence": 95,
              "id": 1087
            },
            {
              "x": 42.75,
              "y": 33.77,
              "confidence": 95,
              "id": 1088
            },
            {
              "x": 42,
              "y": 34.15,
              "confidence": 93,
              "id": 1089
            },
            {
              "x": 41.5,
              "y": 34.52,
              "confidence": 92,
              "id": 1090
            },
            {
              "x": 40.75,
              "y": 34.33,
              "confidence": 92,
              "id": 1091
            }
          ],
          "similarities": null,
          "tid": "TEMP_F@01da2f7b021f22173fba246101470098_d03f1f9d7a1d0_40.88_28.33_0_1",
          "recognizable": true,
          "threshold": 55,
          "center": {
            "x": 40.88,
            "y": 28.33
          },
          "eye_left": {
            "x": 43.62,
            "y": 24.58,
            "confidence": 97,
            "id": 449
          },
          "eye_right": {
            "x": 38.38,
            "y": 24.39,
            "confidence": 97,
            "id": 450
          },
          "mouth_center": {
            "x": 41.25,
            "y": 34.15,
            "confidence": 94,
            "id": 615
          },
          "nose": {
            "x": 42.75,
            "y": 30.02,
            "confidence": 95,
            "id": 403
          }
        },
        {
          "uids": [
            {
              "uid": "eva@sky-test",
              "confidence": 100
            }
          ],
          "label": null,
          "confirmed": false,
          "manual": false,
          "width": 10.25,
          "height": 15.38,
          "yaw": 2,
          "roll": 0,
          "pitch": -15,
          "attributes": {
            "face": {
              "value": "true",
              "confidence": 68
            },
            "gender": {
              "value": "female",
              "confidence": 25
            },
            "glasses": {
              "value": "false",
              "confidence": 47
            },
            "dark_glasses": {
              "value": "false",
              "confidence": 61
            },
            "smiling": {
              "value": "true",
              "confidence": 61
            },
            "age_est": {
              "value": "20",
              "confidence": 50
            },
            "mood": {
              "value": "happy",
              "confidence": 74
            },
            "lips": {
              "value": "parted",
              "confidence": 100
            },
            "eyes": {
              "value": "open",
              "confidence": 100
            },
            "neutral_mood": {
              "value": "false",
              "confidence": 0
            },
            "anger": {
              "value": "true",
              "confidence": 52
            },
            "disgust": {
              "value": "false",
              "confidence": 0
            },
            "fear": {
              "value": "false",
              "confidence": 0
            },
            "happiness": {
              "value": "true",
              "confidence": 74
            },
            "sadness": {
              "value": "false",
              "confidence": 0
            },
            "surprise": {
              "value": "false",
              "confidence": 40
            }
          },
          "points": [
            {
              "x": 72.25,
              "y": 49.72,
              "confidence": 91,
              "id": 1024
            },
            {
              "x": 72.38,
              "y": 52.16,
              "confidence": 94,
              "id": 1025
            },
            {
              "x": 72.62,
              "y": 54.41,
              "confidence": 95,
              "id": 1026
            },
            {
              "x": 72.88,
              "y": 56.66,
              "confidence": 94,
              "id": 1027
            },
            {
              "x": 73.38,
              "y": 58.72,
              "confidence": 94,
              "id": 1028
            },
            {
              "x": 74.25,
              "y": 60.6,
              "confidence": 93,
              "id": 1029
            },
            {
              "x": 75.25,
              "y": 62.29,
              "confidence": 93,
              "id": 1030
            },
            {
              "x": 76.5,
              "y": 63.6,
              "confidence": 93,
              "id": 1031
            },
            {
              "x": 78.12,
              "y": 63.98,
              "confidence": 94,
              "id": 1032
            },
            {
              "x": 79.62,
              "y": 63.6,
              "confidence": 93,
              "id": 1033
            },
            {
              "x": 81,
              "y": 62.29,
              "confidence": 93,
              "id": 1034
            },
            {
              "x": 82.25,
              "y": 60.79,
              "confidence": 91,
              "id": 1035
            },
            {
              "x": 83.12,
              "y": 58.72,
              "confidence": 90,
              "id": 1036
            },
            {
              "x": 83.62,
              "y": 56.47,
              "confidence": 90,
              "id": 1037
            },
            {
              "x": 83.88,
              "y": 54.22,
              "confidence": 90,
              "id": 1038
            },
            {
              "x": 84.12,
              "y": 51.78,
              "confidence": 93,
              "id": 1039
            },
            {
              "x": 84.25,
              "y": 49.34,
              "confidence": 92,
              "id": 1040
            },
            {
              "x": 73,
              "y": 49.16,
              "confidence": 96,
              "id": 1041
            },
            {
              "x": 73.75,
              "y": 48.22,
              "confidence": 96,
              "id": 1042
            },
            {
              "x": 74.88,
              "y": 48.22,
              "confidence": 95,
              "id": 1043
            },
            {
              "x": 75.88,
              "y": 48.59,
              "confidence": 96,
              "id": 1044
            },
            {
              "x": 76.88,
              "y": 49.16,
              "confidence": 95,
              "id": 1045
            },
            {
              "x": 78.5,
              "y": 48.97,
              "confidence": 95,
              "id": 1046
            },
            {
              "x": 79.75,
              "y": 48.41,
              "confidence": 97,
              "id": 1047
            },
            {
              "x": 80.75,
              "y": 48.03,
              "confidence": 97,
              "id": 1048
            },
            {
              "x": 82,
              "y": 48.22,
              "confidence": 96,
              "id": 1049
            },
            {
              "x": 82.88,
              "y": 48.97,
              "confidence": 93,
              "id": 1050
            },
            {
              "x": 77.75,
              "y": 50.47,
              "confidence": 97,
              "id": 1051
            },
            {
              "x": 77.75,
              "y": 52.16,
              "confidence": 97,
              "id": 1052
            },
            {
              "x": 77.75,
              "y": 53.85,
              "confidence": 97,
              "id": 1053
            },
            {
              "x": 77.75,
              "y": 55.53,
              "confidence": 95,
              "id": 1054
            },
            {
              "x": 76.5,
              "y": 55.91,
              "confidence": 96,
              "id": 1055
            },
            {
              "x": 77.12,
              "y": 56.29,
              "confidence": 97,
              "id": 1056
            },
            {
              "x": 77.75,
              "y": 56.66,
              "confidence": 97,
              "id": 1057
            },
            {
              "x": 78.5,
              "y": 56.29,
              "confidence": 96,
              "id": 1058
            },
            {
              "x": 79,
              "y": 56.1,
              "confidence": 95,
              "id": 1059
            },
            {
              "x": 74.25,
              "y": 50.47,
              "confidence": 98,
              "id": 1060
            },
            {
              "x": 74.88,
              "y": 49.91,
              "confidence": 97,
              "id": 1061
            },
            {
              "x": 75.75,
              "y": 49.91,
              "confidence": 97,
              "id": 1062
            },
            {
              "x": 76.38,
              "y": 50.84,
              "confidence": 98,
              "id": 1063
            },
            {
              "x": 75.75,
              "y": 50.84,
              "confidence": 98,
              "id": 1064
            },
            {
              "x": 74.88,
              "y": 50.84,
              "confidence": 98,
              "id": 1065
            },
            {
              "x": 79.38,
              "y": 50.84,
              "confidence": 98,
              "id": 1066
            },
            {
              "x": 80.12,
              "y": 49.91,
              "confidence": 98,
              "id": 1067
            },
            {
              "x": 80.88,
              "y": 49.91,
              "confidence": 97,
              "id": 1068
            },
            {
              "x": 81.62,
              "y": 50.47,
              "confidence": 97,
              "id": 1069
            },
            {
              "x": 81,
              "y": 50.84,
              "confidence": 98,
              "id": 1070
            },
            {
              "x": 80.12,
              "y": 51.03,
              "confidence": 98,
              "id": 1071
            },
            {
              "x": 75.12,
              "y": 57.41,
              "confidence": 96,
              "id": 1072
            },
            {
              "x": 76.25,
              "y": 57.22,
              "confidence": 96,
              "id": 1073
            },
            {
              "x": 77.12,
              "y": 57.22,
              "confidence": 98,
              "id": 1074
            },
            {
              "x": 77.75,
              "y": 57.6,
              "confidence": 97,
              "id": 1075
            },
            {
              "x": 78.62,
              "y": 57.22,
              "confidence": 95,
              "id": 1076
            },
            {
              "x": 79.75,
              "y": 57.22,
              "confidence": 96,
              "id": 1077
            },
            {
              "x": 80.88,
              "y": 57.41,
              "confidence": 95,
              "id": 1078
            },
            {
              "x": 79.75,
              "y": 59.29,
              "confidence": 97,
              "id": 1079
            },
            {
              "x": 78.62,
              "y": 60.23,
              "confidence": 97,
              "id": 1080
            },
            {
              "x": 77.88,
              "y": 60.41,
              "confidence": 97,
              "id": 1081
            },
            {
              "x": 77.12,
              "y": 60.23,
              "confidence": 97,
              "id": 1082
            },
            {
              "x": 76.12,
              "y": 59.47,
              "confidence": 96,
              "id": 1083
            },
            {
              "x": 75.5,
              "y": 57.6,
              "confidence": 97,
              "id": 1084
            },
            {
              "x": 77.12,
              "y": 57.79,
              "confidence": 97,
              "id": 1085
            },
            {
              "x": 77.75,
              "y": 57.97,
              "confidence": 97,
              "id": 1086
            },
            {
              "x": 78.62,
              "y": 57.79,
              "confidence": 95,
              "id": 1087
            },
            {
              "x": 80.5,
              "y": 57.6,
              "confidence": 95,
              "id": 1088
            },
            {
              "x": 78.62,
              "y": 59.1,
              "confidence": 97,
              "id": 1089
            },
            {
              "x": 77.75,
              "y": 59.29,
              "confidence": 97,
              "id": 1090
            },
            {
              "x": 77.12,
              "y": 59.1,
              "confidence": 97,
              "id": 1091
            }
          ],
          "similarities": null,
          "tid": "TEMP_F@01da2f7b021f22173fba2461026f0121_d03f1f9d7a1d0_77.88_54.22_0_1",
          "recognizable": true,
          "threshold": 55,
          "center": {
            "x": 77.88,
            "y": 54.22
          },
          "eye_left": {
            "x": 80.5,
            "y": 50.47,
            "confidence": 98,
            "id": 449
          },
          "eye_right": {
            "x": 75.38,
            "y": 50.47,
            "confidence": 98,
            "id": 450
          },
          "mouth_center": {
            "x": 77.88,
            "y": 58.35,
            "confidence": 97,
            "id": 615
          },
          "nose": {
            "x": 77.75,
            "y": 55.53,
            "confidence": 95,
            "id": 403
          }
        }
      ]
    }
  ],
  "usage": {
    "used": 1849,
    "remaining": 98151,
    "limit": 100000,
    "reset_time": 1481098261,
    "reset_time_text": "Wed, 7 December 2016 08:11:01 +0000"
  },
  "operation_id": "46b26205ab2a4ecdb2bd76359f229271"
}
```