<?php

namespace App\Http\Controllers;

use App\Models\produk;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProdukAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $produk = Produk::all();
        return inertia::render('Admin/Product', [
            'produk' => $produk,
            'assetUrl' => asset(''),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $produk = new Produk();
        $produk->foto = $request->foto;
        $produk->produk_id = $request->produkId;
        $produk->nama_produk = $request->namaProduk;
        $produk->harga = $request->harga;
        $produk->stock = $request->stock;
        $produk->kategori = $request->kategori;
        $produk->ukuran = $request->ukuran;
        $produk->warna = $request->warna;
        $produk->deskripsi = $request->deskripsi;
        $produk->save();
        return redirect()->back()->with('message', 'Berhasil Di Masukan');
    }

    /**
     * Display the specified resource.
     */
    public function show(produk $produk)
    {
        $produk = Produk::all();
        return inertia::render('Admin/Product', [
            'produk' => $produk,
            'assetUrl' => asset(''),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Produk $produk, Request $request)
    {
        $produk = Produk::all();
        return Inertia::render('Admin/Product', [
            'produk' => $produk,
            'produkEdit' => $produk->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, produk $produk)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(produk $produk)
    {
        //
    }
}
