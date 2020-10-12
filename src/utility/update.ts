function force<
    Obj extends {},
    K extends keyof Obj
>(obj: Obj, k : K, v: Obj[K]): Obj {
    return { ...obj, [k] : v };
};

export function update<
    Obj extends {},
    K extends keyof Obj
>(obj: Obj, k : K, v: Obj[K]): Obj {
    return obj[k] === v ? obj : force(obj, k, v);
};

function force2<
    Obj extends {},
    K1 extends keyof Obj,
    K2 extends keyof Obj[K1]
>(obj: Obj, k1 : K1, k2: K2, v: Obj[K1][K2]): Obj {
    return force(obj, k1, force(obj[k1], k2, v));
}

export function update2<
    Obj extends {},
    K1 extends keyof Obj,
    K2 extends keyof Obj[K1]
>(obj: Obj, k1 : K1, k2: K2, v: Obj[K1][K2]): Obj {
    return obj[k1][k2] === v ? obj : force2(obj, k1, k2, v);
};

function force3<
Obj extends {},
K1 extends keyof Obj,
K2 extends keyof Obj[K1],
K3 extends keyof Obj[K1][K2]
>(obj: Obj, k1 : K1, k2: K2, k3: K3, v: Obj[K1][K2][K3]): Obj {
    return force(obj, k1, force2(obj[k1], k2, k3, v));
}

export function update3<
    Obj extends {},
    K1 extends keyof Obj,
    K2 extends keyof Obj[K1],
    K3 extends keyof Obj[K1][K2]
>(obj: Obj, k1 : K1, k2: K2, k3: K3, v: Obj[K1][K2][K3]): Obj {
    return obj[k1][k2][k3] === v ? obj : force3(obj, k1, k2, k3, v);
};

function force4<
Obj extends {},
K1 extends keyof Obj,
K2 extends keyof Obj[K1],
K3 extends keyof Obj[K1][K2],
K4 extends keyof Obj[K1][K2][K3]
>(obj: Obj, k1 : K1, k2: K2, k3: K3, k4: K4, v: Obj[K1][K2][K3][K4]): Obj {
    return force(obj, k1, force3(obj[k1], k2, k3, k4, v));
}

export function update4<
    Obj extends {},
    K1 extends keyof Obj,
    K2 extends keyof Obj[K1],
    K3 extends keyof Obj[K1][K2],
    K4 extends keyof Obj[K1][K2][K3]
>(obj: Obj, k1 : K1, k2: K2, k3: K3, k4: K4, v: Obj[K1][K2][K3][K4]): Obj {
    return obj[k1][k2][k3][k4] === v
        ? obj
        : force4(obj, k1, k2, k3, k4, v);
};