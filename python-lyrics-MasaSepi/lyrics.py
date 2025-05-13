import time
import sys

lyrics = [
    "Masa ini datang lagi",
    "Namamu belum juga pergi dari hati",
    "Rintik kembali membasahi pipi",
    "Sebab bayangmu masih di sini",
    "Kukira hanya sekali",
    "Ku dihantui kenangan indah memori",
    "Luka yang kaugores membekas abadi",
    "Namun, ku masih ingin kau kembali"
]

line_delays = [3.5, 2.0, 2.5, 3.5, 3.0, 1., 1.0, 1.0]

char_delays = [0.1, 0.12, 0.10, 0.10, 0.15, 0.1, 0.11, 0.1]  

for line, line_delay, char_delay in zip(lyrics, line_delays, char_delays):
    for char in line:
        sys.stdout.write(char)
        sys.stdout.flush()
        time.sleep(char_delay)
    print()
    time.sleep(line_delay)
