//gcc -o chall chall.c -ldl -std=gnu99 -Wl,-z,norelro -D_GNU_SOURCE -Wall -Wextra -Wshadow
#include <stdio.h>
#include <stdlib.h>
#include <sys/mman.h>
#include <sys/types.h>
#include <unistd.h>

int main()
{
	unsigned int codesize = 4096;
	void * address = 0;
	void * requested = (void *) 0x41414000;

	seteuid(0);
	setuid(0);
	setgid(0);
	setegid(0);

	address = mmap(requested, codesize, PROT_READ | PROT_WRITE | PROT_EXEC, MAP_ANONYMOUS | MAP_PRIVATE, 0, 0);
	if (address != requested)
	{
		printf("Something is wrong, %x is not equal to %x.", address, requested);
		exit(1);
	}

	printf("I am a SUID binary, compiled with:\n\n");
	printf("-ldl -std=gnu99 -Wl,-z,norelro -Wall -Wextra -Wshadow\n\n");
	printf("Goal is to cat /flag.\n\n");

	long what;
	long *where = (long *) 1;
	setbuf(stdout, NULL);
	while(where != 0)
	{
		puts("What?");
		scanf("%ld", &what);
		puts("Where?");
		scanf("%ld", (long int*) &where);
		if(where != 0)
			*where = what;
	}
}
