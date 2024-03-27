#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>

int  main()
{
   int a, b, c, d, e, f;      
   
   printf("두 정수를 입력하세요: ");
   scanf("%d %d", &a, &b);


   c = a + b;
   d = a - b;
   e = a * b;
   f = a / b;


   printf("%d + %d = %d", a, b, c);
   printf("%d - %d = %d", a, b, d);
   printf("%d * %d = %d", a, b, e);
   printf("%d / %d = %d", a, b, f);

   printf("\n");

   return 0;
}