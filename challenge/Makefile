all: chal1 chal2

chal1: chal1.c Makefile
	gcc -std=gnu99 -Wl,-z,execstack -fno-stack-protector -o chal1 chal1.c
	strip -s chal1
	sudo chown root:root chal1
	sudo cp chal1 /root/chal1

chal2: chal2.c Makefile
	gcc -o chal2 chal2.c -ldl -std=gnu99 -Wl,-z,norelro -D_GNU_SOURCE -Wall -Wextra -Wshadow
	sudo chown root:root chal2
	sudo chmod u+s chal2

clean:
	rm -f chal1 chal2
	sudo rm -f /root/chal /root/chal2
