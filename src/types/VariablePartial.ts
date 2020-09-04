type VariablePartial<T, U extends keyof T> = Omit<T, U> & Partial<{ [C in U]: T[C] }>;
